import InputAutocomplete from './autocomplete/input_autocomplete';
import InputCheckbox from './checkbox/input_checkbox';
import InputCheckboxGroup from './checkbox/input_checkbox_group';
import InputColorpicker from './input_colorpicker';
import InputDatefilter from './datefilter/input_datefilter';
import InputDatepicker from './input_datepicker';
import InputFile from './input_file';
import InputGridForm from './grid_form/input_grid_form';
import InputHidden from './input_hidden';
import InputMasked from './input_masked';
import InputNumber from './input_number';
import InputPassword from './input_password';
import InputRadioGroup from './radiobutton/input_radio_group';
import InputSelect from './select/input_select';
import InputSwitch from './input_switch';
import InputText from './input_text';
import InputTextarea from './input_textarea';

export default {
    text: InputText,
    autocomplete: InputAutocomplete,
    checkbox: InputCheckbox,
    colorpicker: InputColorpicker,
    datefilter: InputDatefilter,
    datepicker: InputDatepicker,
    number: InputNumber,
    file: InputFile,
    gridform: InputGridForm,
    hidden: InputHidden,
    password: InputPassword,
    select: InputSelect,
    switch: InputSwitch,
    textarea: InputTextarea,
    checkbox_group: InputCheckboxGroup,
    radio_group: InputRadioGroup,
    masked: InputMasked,
}
