import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('meeting');
  },

  actions: {

    saveMeeting(newMeeting) {
      newMeeting.save().then(() => this.transitionTo('index'));
    },

    willTransition() {
      this.controller.get('meeting').rollbackAttributes();
    }
  }
});
