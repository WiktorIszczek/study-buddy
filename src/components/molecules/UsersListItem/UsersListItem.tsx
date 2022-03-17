import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UsersListItem.styles';
interface UserData {
  average: string;
  name: string;
  attendance?: string;
}

const UsersListItem = ({
  userData: { average, name, attendance = '0%' },
}: {
  userData: UserData;
}) => (
  <Wrapper>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
