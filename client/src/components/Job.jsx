/* eslint-disable react/prop-types */
import {
  FaLocationArrow,
  FaBriefcase,
  FaCalendarAlt,
  FaLaptopHouse,
  FaRegStickyNote,
} from 'react-icons/fa';

import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';

import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  jobRemote,
  jobSource,
  createdAt,
  jobStatus,
}) => {
  const date = day(createdAt).format('MMM Do,YYYY');
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <JobInfo icon={<FaRegStickyNote />} text={jobSource} />
          <JobInfo icon={<FaLaptopHouse />} text={jobRemote} />
          <div className={`status ${jobStatus}`}>{jobStatus}</div>
        </div>
        <footer className='actions'>
          <Link to={`../edit-job/${_id}`} className='btn edit-btn'>
            Edit
          </Link>
          <Form method='post' action={`../delete-job/${_id}`}>
            <button type='submit' className='btn delete-btn'>
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Job;
