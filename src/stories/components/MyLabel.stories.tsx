import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";

// Title - Component
export default {
	title: 'UI/MyLabel',
	component: MyLabel,
	argTypes: {
		// cambiar la ui => controles
		color: { control: 'select' },
		fontColor: { control: 'color' }
		// color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] }
	}
} as ComponentMeta<typeof MyLabel>;

// StoryBook Render
const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel { ...args} />


// CREAR UNA COPIA DE ESTE TEMPLATE ROMPIENDO LA DIFERENCIA CON ESTE OBJETO => BIND()
// estariamos mutando el objeto sino
export const Basic = Template.bind({});

Basic.args = {
	size: 'normal',
	allCaps: false, // TRUE: Capitalizar toda la palabra
}

export const AllCaps = Template.bind({});
AllCaps.args = {
	size: 'normal',
	allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
	size: 'normal',
	color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
	size: 'normal',
	color: 'tertiary'
}

export const CustomFontcolor = Template.bind({});
CustomFontcolor.args = {
	fontColor: '#5517ac',
	size: 'h1'	
}

export const CustomBackgroundcolor = Template.bind({});
CustomBackgroundcolor.args = {
	fontColor: 'white',
	size: 'h1',
	backgroundColor: 'black'	
}