import DS from 'ember-data';

var Meeting = DS.Model.extend({
  name: DS.attr('string'),
  shortName: DS.attr('string'),
  flag: DS.attr('string'),
  begin: DS.attr('date'),
  end: DS.attr('date'),
  minAttendee: DS.attr('number'),
  maxAttendee: DS.attr('number')
});

Meeting.reopenClass({
  FIXTURES: [
    {id: 1, name: 'Klaĉ-Kunveno Post-Somera', shortName: 'KKPS', flag: 'NL.svg'},
    {id: 2, name: 'Internacia Junulara Kongreso', shortName: 'IJK', flag: 'TG.svg'},
    {id: 3, name: 'Internacia Junulara Semajno', shortName: 'IJS', flag: 'HU.svg'}
  ]
});

export default Meeting;