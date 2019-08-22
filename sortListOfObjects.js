//Sort array of objects by string property value

objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0));


=========

function compare( a, b ) {
  if ( a.last_nom < b.last_nom ){
    return -1;
  }
  if ( a.last_nom > b.last_nom ){
    return 1;
  }
  return 0;
}

objs.sort( compare );
