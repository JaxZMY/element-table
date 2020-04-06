<template>
	<div id="app">
	
		<HelloWorld :fatherData="fatherData" @zjcz="fatherHandle($event)"/>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
export default {
	name: 'app',
	components:{
		HelloWorld
	},
	data() {
		const userValidator = (rule, value, callback) => {
			if (value.length > 3) {
				callback();
			} else {
				callback(new Error('用户名长度必须大于3'));
			}
		};
		return {
			data: {
				user: '',
				region: '',
				
			},
			rules: {
				user: [{ required: true, trigger: 'change', message: '用户名必须录入' }, { validator: userValidator, trigger: 'change' }]
			},
			fatherData:1
		};
	},
	methods: {
		onSubmit() {
			console.log(this.data);
			this.$refs.form.validate((isvalid,errors) =>{
				console.log(isvalid,errors)
			})
		},
		fatherHandle(msg){
			console.log(msg)
			this.fatherData = msg;
			alert(this.fatherData)
		}
	}
};
</script>
