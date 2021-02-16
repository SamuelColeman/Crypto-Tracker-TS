import { Theme, createStyles } from '@material-ui/core'

const styles = (theme: Theme) => 
  createStyles({
      header : {
        display: 'flex',
        flexDirection: 'row',
        padding: '2vh',
        backgroundColor: '#2f424d',
      },
      title : {
        fontSize: '4vh',
        paddingLeft: '1vh',
        color: '#f3f4fc',
      },
      icon : {
        width: '5vh',
        height: '5vh',
        color: '#f3f4fc',
      }
  })

export default styles