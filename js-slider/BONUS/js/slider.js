// console.log('slider')

const slides = [
			
		'./img/01.jpg',
	
	
		'./img/02.jpg',
	
	
		'./img/03.jpg',
	
	
		'./img/04.jpg',
	
	
		'./img/05.jpg',
	]



const app = new Vue ({
	el:'#root',
	data:{
		slides,
		slideActive: 'active',
		currentSlideIndex: 0,
		lastIndex: slides.length - 1,
		mounted: function() {
			this.autoMove()
		},
	},
	
	methods:{
		moveRight(){
			if(this.currentSlideIndex!=this.lastIndex){
				this.currentSlideIndex += 1;
			}else{
				this.currentSlideIndex = 0;
			};
		},
		moveLeft(){
			if(this.currentSlideIndex!=0){
				this.currentSlideIndex -= 1;
			}else{
				this.currentSlideIndex = this.lastIndex;
			}
		},

		autoMove: function(){
			setInterval(function(){
			
			if(this.currentSlideIndex < this.lastIndex)	{
				slides[0].classList.remove('active');
				currentSlideIndex++;
			}else{
				this.currentSlideIndex = 0;
			}
		
			if(this.currentSlideIndex != 0){
				slides[this.currentSlideIndex-1].classList.remove('active');
				slides[this.currentSlideIndex].classList.add('active');
			}else{
				slides[this.lastIndex].classList.remove('active');
				slides[this.currentSlideIndex].classList.add('active');
			}
		
		
			}, 3000);
		},
		
	},
	mounted () {
		this.autoMove()
			  }
})




