import React from 'react';
import PropTypes from 'prop-types';

// Other
import { toJS } from 'mobx';
import { uid } from 'react-uid';

// Components
import Modal from '../../components/Modal';

const CompanyNameBox = ({ companyId, companyAddresses, companyName, projects, closeModal }) => {
  const address = toJS(companyAddresses).find(address => address.companyId === companyId);
  const companyProjects = toJS(projects).filter(project => project.companyId === companyId);

  return (
    <div>
      <Modal title={companyName} closeModal={closeModal}>
        <div>Address: </div>
        <div>
          {address.country} {address.city}
        </div>
        <div>
          {address.state} {address.street}
        </div>
        <hr />
        <div>Projects: </div>
        {companyProjects.length ? (
          companyProjects.map(project => <div key={uid(project)}>{project.name}</div>)
        ) : (
          <div>Company projects are not available</div>
        )}
      </Modal>
    </div>
  );
};

// TODO ADD PROPTYPES
CompanyNameBox.propTypes = {
  companyId: PropTypes.string.isRequired,
  companyAddresses: PropTypes.array
};

export default CompanyNameBox;
