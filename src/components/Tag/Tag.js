import React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';

const Tag = props => {
  return (
    <Link to={'tag/' + _.kebabCase(props.tag)} className="tag">
      {props.tag}
    </Link>
  )
}

export default Tag;