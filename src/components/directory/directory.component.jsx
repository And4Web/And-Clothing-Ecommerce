import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

//we use spread operator instead of the below code:
/*{
  this.state.sections.map(({title, id, imageUrl, size, linkUrl}) => (
  <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
  ))
}*/
