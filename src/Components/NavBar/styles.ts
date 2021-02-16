import { Theme, createStyles } from '@material-ui/core'

const styles = (theme: Theme) => 
  createStyles({
      bar : {
          display: 'flex',
          FlexDirection: 'row',
          justifyContent: 'space-evenly',
          padding: '2vh',
          borderBottom: 'solid 1px #bac0c6',
          backgroundColor: '#5b7c85'
      },
      title : {
        color: '#f3f4fc'
      },
      input : {

      },
  })

export default styles