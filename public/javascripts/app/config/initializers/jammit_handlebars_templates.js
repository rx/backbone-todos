Handlebars.template = function(templateString) {
  return function () {
    if (arguments.length < 1) {
      // With no arguments, return the raw template -- useful for rendering
      // partials.
      return templateString;
    } else {
      Handlebars.templates = Handlebars.templates || {}
      Handlebars.templates[templateString] = Handlebars.templates[templateString] || Handlebars.compile(templateString);
      return Handlebars.templates[templateString](arguments[0], arguments[1]);
    }
  };
};