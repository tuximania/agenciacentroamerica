// === NAVBAR: scroll effect + hamburger ===
const navbar   = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('back-top').classList.toggle('visible', window.scrollY > 400);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// === FOOTER: dynamic year ===
document.getElementById('year').textContent = new Date().getFullYear();

// === FORM: validation & DOM interaction ===
const form    = document.getElementById('form-cotizacion');
const success = document.getElementById('form-success');

const rules = {
  nombre:   { required: true, minLen: 3,  msg: 'Ingresa tu nombre completo (mínimo 3 caracteres).' },
  email:    { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, msg: 'Ingresa un correo electrónico válido.' },
  telefono: { required: true, pattern: /^[267]\d{3}-?\d{4}$/, msg: 'Ingresa un número salvadoreño válido (ej: 7000-0000).' },
  destino:  { required: true, msg: 'Selecciona un destino.' },
  personas: { required: true, min: 1, max: 50, msg: 'Ingresa entre 1 y 50 personas.' },
  fecha:    { required: true, future: true, msg: 'Selecciona una fecha futura.' },
};

function validateField(name, value) {
  const rule = rules[name];
  if (!rule) return null;

  if (rule.required && !value.trim()) return rule.msg;
  if (rule.minLen && value.trim().length < rule.minLen) return rule.msg;
  if (rule.pattern && !rule.pattern.test(value.trim())) return rule.msg;
  if (rule.min !== undefined && (isNaN(value) || +value < rule.min || +value > rule.max)) return rule.msg;
  if (rule.future) {
    const today = new Date(); today.setHours(0,0,0,0);
    if (!value || new Date(value) <= today) return 'Selecciona una fecha posterior a hoy.';
  }
  return null;
}

function showError(name, msg) {
  const input = document.getElementById(name);
  const span  = document.getElementById('error-' + name);
  if (msg) {
    input.classList.add('error');
    span.textContent = msg;
  } else {
    input.classList.remove('error');
    span.textContent = '';
  }
}

// Live validation on blur
Object.keys(rules).forEach(name => {
  const el = document.getElementById(name);
  if (!el) return;
  el.addEventListener('blur', () => {
    showError(name, validateField(name, el.value));
  });
  el.addEventListener('input', () => {
    if (el.classList.contains('error')) {
      showError(name, validateField(name, el.value));
    }
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  // Validate all fields
  Object.keys(rules).forEach(name => {
    const el  = document.getElementById(name);
    const err = validateField(name, el ? el.value : '');
    showError(name, err);
    if (err) valid = false;
  });

  // Checkbox
  const terminos = document.getElementById('terminos');
  const errTerminos = document.getElementById('error-terminos');
  if (!terminos.checked) {
    errTerminos.textContent = 'Debes aceptar los términos y condiciones.';
    valid = false;
  } else {
    errTerminos.textContent = '';
  }

  if (!valid) {
    // Scroll to first error
    const firstError = form.querySelector('.error');
    if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  // Success: update DOM and show confirmation
  document.getElementById('success-nombre').textContent = document.getElementById('nombre').value.trim();
  document.getElementById('success-email').textContent  = document.getElementById('email').value.trim();

  form.style.display    = 'none';
  success.style.display = 'block';
  success.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Reset form
document.getElementById('btn-nueva').addEventListener('click', () => {
  form.reset();
  form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
  form.querySelectorAll('.form-error').forEach(el => el.textContent = '');
  form.style.display    = '';
  success.style.display = 'none';
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// === CARD: click sets destino in form ===
document.querySelectorAll('.card[data-dest]').forEach(card => {
  card.addEventListener('click', e => {
    if (e.target.closest('a')) return;
    const dest    = card.dataset.dest;
    const select  = document.getElementById('destino');
    const option  = [...select.options].find(o => o.value === dest);
    if (option) { select.value = dest; showError('destino', null); }
    document.getElementById('cotizacion').scrollIntoView({ behavior: 'smooth' });
  });
});
