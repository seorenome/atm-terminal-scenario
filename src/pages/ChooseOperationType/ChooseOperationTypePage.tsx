import TerminalLayout from '../../components/layout/TerminalLayout/TerminalLayout'
import TerminalViewport from '../../components/layout/TerminalViewport/TerminalViewport'
import ChooseOperationTypeView from './ChooseOperationTypeView'

const ChooseOperationTypePage = () => {
  return (
    <TerminalViewport>
      <TerminalLayout
        header={<div>Header</div>}
        footer={<div>Footer</div>}
      >
        <ChooseOperationTypeView />
      </TerminalLayout>
    </TerminalViewport>
  )
}

export default ChooseOperationTypePage