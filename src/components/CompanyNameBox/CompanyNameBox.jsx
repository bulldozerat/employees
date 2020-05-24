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
      <Modal title={companyName} closeModal={closeModal} left='1rem'>
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

CompanyNameBox.propTypes = {
  companyId: PropTypes.string.isRequired,
  companyName: PropTypes.string,
  closeModal: PropTypes.func,
  companyAddresses: PropTypes.arrayOf(
    PropTypes.shape({
      companyId: PropTypes.string
    })
  ),
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  )
};

export default CompanyNameBox;
