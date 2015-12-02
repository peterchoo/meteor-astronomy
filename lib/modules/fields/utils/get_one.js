Astro.utils.fields.getOne = function(doc, fieldPattern, options) {
  // Prepare options.
  options = _.extend({
    transient: true
  }, options);

  return Astro.utils.fields.traverse(
    doc, fieldPattern,
    function(nestedDoc, nestedFieldName, field) {
      // If a field does not exist than we don't return anything.
      if (!field) {
        return;
      }

      // Don't get a transient field.
      if (!options.transient && field.transient) {
        return;
      }

      // Just return a value.
      return nestedDoc[nestedFieldName];
    }
  );
};