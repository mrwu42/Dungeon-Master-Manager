import React, { Component } from "react";
import { List, ListItem } from "../List";
import IncrementButton from "../IncrementDecrementButton/IncrementButton";
import DecrementButton from "../IncrementDecrementButton/DecrementButton";

import "./style.css";

class PlayerCard extends Component {

  render() {
    return (
      <>
      {/* {this.state.players.length > 0 ? */}
        <div className="card-header"><h5 className="card-title">{this.props.character}</h5></div>
        <div className="card-body">
          {this.props.attributes.length > 0 ?
            <List>
              {this.props.attributes.map((attribute, index) =>
                <div className="row" key={index}>
                  <div className="col" key={index}>
                  <ListItem key={attribute.attrName}><span className="attr-name">{attribute.attrName}:</span>  <span className="attr-value">{attribute.attrValue}</span> </ListItem>
                  </div>
                </div>
                
                // <div className="row">
                //   <div className="col">
                //     <ListItem >
                //       <div className="row">
                //         <IncrementButton></IncrementButton><span className="attr-name">{attribute.attrName}:</span>  <span className="attr-value">{attribute.attrValue}</span> <DecrementButton></DecrementButton>
                //       </div>
                //     </ListItem>
                //   </div>
                // </div>
                )}
            </List>
            :
            <div>No Attributes</div>
            }
        </div>
      </>
    );
  }

}

export default PlayerCard;
