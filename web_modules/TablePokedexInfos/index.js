import React, {PropTypes, Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/lib/table';


export default class TablePokedexInfos extends Component {

  static propTypes = {
      region: PropTypes.string,
      version_groups: PropTypes.array,
      pokemon_entries_length: PropTypes.number,
  };

  static defaultProps = {
      region: null,        
      pokemon_entries_length: null,
  };

  capitalizeFirstLetter(string) {
    if(string!=null){
      return string.charAt(0).toUpperCase() + string.slice(1);
    }else{
      return null
    }
  }

  render() {        
    const {        
      region,
      version_groups,
      pokemon_entries_length,
      title,
      description
    } = this.props
    
    return (        
      <Table selectable={false} >
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn 
              colSpan="1" 
              style={{
                fontSize: '24px',
                color:'#fff',
                textAlign: 'center',
                backgroundColor: '#F44336'
              }}>
              {title}
            </TableHeaderColumn>  
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} >
          <TableRow style={{backgroundColor: '#e5e5e5'}}>      
            <TableRowColumn>Region</TableRowColumn>
            <TableRowColumn>{region!=null?this.capitalizeFirstLetter(region):null}</TableRowColumn>      
          </TableRow>
          <TableRow style={{backgroundColor: '#e5e5e5'}}>
            <TableRowColumn>Version groups</TableRowColumn>
            <TableRowColumn>
              {            
                version_groups &&
                version_groups.map((version_group, index) => {
                  const isLastVersion = index<version_groups.length-1;
                  return <span key={index}>{version_group.name!=null?this.capitalizeFirstLetter(version_group.name):null}{isLastVersion && ", "}</span>
                })
              }  
            </TableRowColumn>
          </TableRow>
          <TableRow style={{backgroundColor: '#e5e5e5'}}>
            <TableRowColumn>Pokemon Entries</TableRowColumn>
            <TableRowColumn>{pokemon_entries_length}</TableRowColumn>
          </TableRow>   
          <TableRow style={{backgroundColor: '#e5e5e5'}}>
            <TableRowColumn>Description</TableRowColumn>
            <TableRowColumn>{description!=null?description:null}</TableRowColumn>
          </TableRow>      
        </TableBody>
      </Table>
   )
  }
}

