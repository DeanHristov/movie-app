import React, {useState, useEffect} from 'react';
import Pagination from "@shared/ui/Pagination/Pagination";


export default (props) => (
  <footer className={props.isVisible ? 'movie-footer' : 'movie-footer on-hide'}>
    {props.isVisible ? (
      <Pagination {...props} />
    ) : null}
  </footer>
)
