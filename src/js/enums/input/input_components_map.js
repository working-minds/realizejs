import InputAutocomplete from '../../components/input/autocomplete/input_autocomplete';
import InputCheckbox from '../../components/input/checkbox/input_checkbox';
import InputCheckboxGroup from '../../components/input/checkbox/input_checkbox_group';
import InputColorpicker from '../../components/input/input_colorpicker';
import InputDatefilter from '../../components/input/datefilter/input_datefilter';
import InputDatepicker from '../../components/input/input_datepicker';
import InputFile from '../../components/input/input_file';
import InputGridForm from '../../components/input/grid_form/input_grid_form';
import InputHidden from '../../components/input/input_hidden';
import InputMasked from '../../components/input/input_masked';
import InputNumber from '../../components/input/input_number';
import InputPassword from '../../components/input/input_password';
import InputRadioGroup from '../../components/input/radiobutton/input_radio_group';
import InputSelect from '../../components/input/select/input_select';
import InputSwitch from '../../components/input/input_switch';
import InputText from '../../components/input/input_text';
import InputTextarea from '../../components/input/input_textarea';

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
};
