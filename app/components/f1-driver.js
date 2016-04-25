import Ember from 'ember';



export default Ember.Route.extend({
	 selected: false,
  actions: {
    click() {
      this.set('selected', true);
    }
  }
});