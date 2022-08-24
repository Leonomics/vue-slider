// console.log('slider')

const slides = [
	{
		id:1,
		media:'./img/01.jpg',
	},
	{
		id:2,
		media:'./img/02.jpg',
	},
	{
		id:3,
		media:'./img/03.jpg',
	},
	{
		id:4,
		media:'./img/04.jpg',
	},
	{
		id:5,
		media:'./img/05.jpg',
	}
]

let currentSlideIndex = 0;

const app = new Vue ({
	el:'#root',
	data:{
		slides,
		slideActive: 'active',
	},
	methods:{
		onClick(){
			slides.show = false
		},
		active(){
			
		},
	}
})
