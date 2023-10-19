/**
 * @description formula plugin
 * @author wangfupeng
 */

import { DomEditor, IDomEditor } from '@wangeditor/editor'

function withFormula<T extends IDomEditor>(editor: T) {
  const { isInline, isVoid, deleteBackward } = editor
  const newEditor = editor

  // 重写 isInline
  newEditor.isInline = elem => {
    const type = DomEditor.getNodeType(elem)
    if (type === 'formula') {
      return true
    }

    return isInline(elem)
  }

  // 重写 isVoid
  newEditor.isVoid = elem => {
    const type = DomEditor.getNodeType(elem)
    if (type === 'formula') {
      return true
    }

    return isVoid(elem)
  }
  
  newEditor.deleteBackward = (unit) => {
    console.log(unit, 'unit');
    deleteBackward(unit);
  }

  return newEditor
}

export default withFormula
