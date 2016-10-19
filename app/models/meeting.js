import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  shortName: DS.attr('string'),
  city: DS.attr('string'),
  country: DS.attr('string'),
  begin: DS.attr('date'),
  end: DS.attr('date'),
  minAttendee: DS.attr('number'),
  maxAttendee: DS.attr('number'),
  
  isValid: Ember.computed.notEmpty('name')
});
