import * as React from 'react';
import { ClickerDisplayComponent } from './click-display.component';
import { ClickerButtonComponent } from './click-button.component';


export class ClickerComponent extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }


  public render() {
    return (
      <div>
        <ClickerDisplayComponent clicks={this.props.clicks} />
        <ClickerButtonComponent clicks={this.props.clicks} increment={this.props.increment}/>
      </div>
    );
  }
}