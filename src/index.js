/**
 * Obtiene el timestamp actual en milisegundos.
 * @returns {number} Timestamp actual.
 */
const getTimestamp = () => Date.now();

/**
 * Formatea una fecha a un formato largo legible según el local.
 * 
 * @param {string} [locale='es-ES'] - Código de idioma (ej. 'en-US', 'es-ES').
 * @param {Date|string|number} [date=new Date()] - Objeto Date, string de fecha o timestamp. Por defecto es ahora.
 * @param {Intl.DateTimeFormatOptions} [options={}] - Opciones para Intl.DateTimeFormat.
 * @returns {string} La fecha formateada.
 */
const getLongTime = (locale = 'es-ES', date = new Date(), options = {}) => {
  const defaultOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
    ...options
  };

  const dateObj = new Date(date);
  
  if (isNaN(dateObj.getTime())) {
    throw new Error("Fecha inválida proporcionada a getLongTime");
  }

  return dateObj.toLocaleString(locale, defaultOptions);
};

module.exports = {
  getTimestamp,
  getLongTime
};