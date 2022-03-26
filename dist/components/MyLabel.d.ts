import './myLabel.css';
export interface MyLabelProps {
    /**
    * This is the text of the component
    */
    label: string;
    /**
   * The size of the text
   */
    size: 'normal' | 'h1' | 'h2' | 'h3';
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
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
