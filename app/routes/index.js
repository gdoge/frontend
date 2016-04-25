import Ember from 'ember';

var drivers = [{
  id: 1,
  name: 'Nikki',
  lastName: 'Lauda',
  
 
}, {
  id: 2,
  name: 'Fernando',
  lastName: 'Alonso',
 
}];

export default Ember.Route.extend({
  model() {
    return drivers;
  },
});