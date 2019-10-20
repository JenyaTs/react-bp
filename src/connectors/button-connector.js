import { connect } from 'react-redux';
import { updateDate } from '../actions/actions';

export const buttonConnector = connect(
    null,
    {updateDate: (payload) => updateDate(payload)}
);
