import { h } from 'preact';
import style from './style';

const About = (props) => (
	<div class={style.pageAbout}>
		<h1 class={style.pageTitle}>Contact me</h1>
		<div class={style.aboutWrapper}>
			<p class={style.pageBody}>
				<div>Hi!</div>
				<div>
          If you are interested in my work and are  contact me for a contract please use form to contact me.
          If you are interested in my work and are looking to contact me for a contract please use the following form to contact me. If you are interested in my work and are looking to contact me for a contract please use the following form to contact me.
				</div>
				<div>Thanks</div>
			</p>
		</div>
	</div>
);

export default About;