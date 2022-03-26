import './myLabel.css';

export interface MyLabelProps{
	/** 
	* This is the text of the component
	*/
	label: string;
	/**
   * The size of the text
   */
	size: 'normal'|'h1'|'h2'|'h3';
	/**
   * The color of the text
   */
	color?: 'primary' | 'secondary' | 'tertiary';
	/**
   * Capitalize all or not
   */
  allCaps: boolean;
	/**
   * Custom color
   */
  fontColor?: string;
	/**
   * background color
   */
  backgroundColor?: string;

}


export const MyLabel = ({ 
	allCaps = false,
	color = 'primary',
	label = 'No Label', 
	size = 'normal',
	fontColor,
	backgroundColor = 'transparent'
}: MyLabelProps ) => {
  	
	return (
		<span 
			className={ `label ${ size } text-${ color }` } 
			style={{ color: `${ fontColor }`, backgroundColor }}>
			{ (allCaps) ? `${ label.toUpperCase() }` : label }
		</span>
  	)
}

export default MyLabel;