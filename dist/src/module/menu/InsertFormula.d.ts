/**
 * @description insert formula menu
 * @author wangfupeng
 */
import { IModalMenu } from '@wangeditor/editor';
import { IDomEditor, SlateNode } from '@wangeditor/editor';
import 'MathLive';
import { DOMElement } from '../../utils/dom';
declare class InsertFormulaMenu implements IModalMenu {
    readonly title: string;
    readonly iconSvg = "<svg viewBox=\"0 0 1024 1024\"><path d=\"M941.6 734.72L985.984 640H1024l-64 384H0v-74.24l331.552-391.2L0 227.008V0h980L1024 256h-34.368l-18.72-38.88C935.584 143.744 909.024 128 832 128H169.984l353.056 353.056L225.632 832H768c116 0 146.656-41.568 173.6-97.28z\"></path></svg>";
    readonly tag = "button";
    readonly showModal = true;
    readonly modalWidth = 300;
    private $content;
    private readonly textareaId;
    private readonly buttonId;
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
    isDisabled(editor: IDomEditor): boolean;
    getModalPositionNode(editor: IDomEditor): SlateNode | null;
    getModalContentElem(editor: IDomEditor): DOMElement;
    private insertFormula;
}
export default InsertFormulaMenu;
