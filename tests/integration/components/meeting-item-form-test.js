import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('meetup-item-form', 'Integration | Component | meetup item form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{meetup-item-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#meetup-item-form}}
      template block text
    {{/meetup-item-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
