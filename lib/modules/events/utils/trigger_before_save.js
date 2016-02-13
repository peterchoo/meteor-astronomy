Astro.utils.events.triggerBeforeSave = function(doc, trusted) {
	// Trigger the "beforeSave" event handlers.
	if (!doc.dispatchEvent(new Astro.Event('beforeSave', {
		cancelable: true, propagates: true, trusted: trusted
	}))) {
		// If an event was prevented, then we stop here.
		throw new Meteor.Error('prevented', 'Operation prevented', {
			eventName: 'beforeSave'
		});
	}
};