import Vue from 'vue';
import { Button, Carousel, Pagination, Message, MessageBox } from 'element-ui';

Vue.use(Button);
Vue.use(Carousel);
Vue.use(Pagination);
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
