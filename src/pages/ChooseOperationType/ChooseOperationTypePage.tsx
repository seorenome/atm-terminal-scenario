import TerminalFooter from '../../components/layout/TerminalFooter/TerminalFooter'
import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import ChooseOperationTypeView from './ChooseOperationTypeView'

const ChooseOperationTypePage = () => {
  return (
    <TerminalViewport>
      <TerminalLayout
        header={<div>Header</div>}
        footer={
          <TerminalFooter
            leftButtons={[
              {
                label: 'Скасувати',
                variant: 'cancel',
              },
            ]}
            rightButtons={[
              {
                label: 'Повторити',
                variant: 'repeat',
              },
            ]}
          />
        }
      >
        <ChooseOperationTypeView />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default ChooseOperationTypePage