import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  tagName: 'li',
    actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
	imageHide() {
      this.set('isImageShowing', false);
    },
	
	imageRevore(){
		this.remove()
	},
	
	click(){
		this.set('selected',!this.get('selected'))
	}
  }
});