import React, { useState, useEffect } from 'react';
import ScreenHeading from '../../utility/ScreenHeading/ScreenHeading';
import ScrollService from '../../utility/ScrollService';
import Animations from '../../utility/Animations';
import './Resume.css';

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + '-' + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects', logoSrc: 'projects.svg' },
    { label: 'Interests', logoSrc: 'interests.svg' },
  ];

  const programmingSkillsDetails = [
    { skill: 'JavaScript', ratingPercentage: 85 },
    { skill: 'React', ratingPercentage: 85 },
    { skill: 'Redux', ratingPercentage: 80 },
    { skill: 'RxJS', ratingPercentage: 75 },
    { skill: 'Node JS', ratingPercentage: 75 },
    { skill: 'Github', ratingPercentage: 85 },
    { skill: 'HTML', ratingPercentage: 85 },
    { skill: 'CSS', ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: 'Personal Portfolio Website',
      duration: { fromDate: '2021', toDate: '2022' },
      description:
        'A Personal Portfolio website to showcase all my details and projects at one place.',
      subHeading: 'Technologies Used: React JS, Bootsrap',
    },
    /*     {
      title: '*******',
      duration: { fromDate: '2020', toDate: '2021' },
      description: 'lorem       ',
      subHeading: 'Technologies Used:  React/Redux.',
    }, */
    /*   {
      title: '*****',
      duration: { fromDate: '2020', toDate: '2021' },
      description: '******',
      subHeading: '*****',
    }, */
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={'Lviv Polytechnic National University'}
        subHeading={
          'Bachelor of Science Civil Engineering and Engineering Systems'
        }
        fromDate={'2015'}
        toDate={'2020'}
      />

      <ResumeHeading
        heading={'Cursor Education'}
        subHeading={'FRONT-END ADVANCED'}
        fromDate={'2021'}
        toDate={'2021'}
      />
      <ResumeHeading
        heading={'React Online Marathon'}
        subHeading={'SoftserveAcademy'}
        fromDate={'2021'}
        toDate={'2021'}
      />
      <ResumeHeading
        heading={'English Evaluation SoftServe inc.'}
        subHeading={'Current English level is INTERMEDIATE (LOW)'}
        fromDate={'2021'}
        toDate={'2021'}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={'Unit of Parking Inspectors'}
          subHeading={'Lviv City Council'}
          fromDate={'2021'}
          toDate={'Present'}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Fixing violations of parking rules
          </span>
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={'Terminal manager'}
          subHeading={'Nova Poshta'}
          fromDate={'2019'}
          toDate={'2021'}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          Optimization of the terminal section and control of personnel over the handling, movement and sorting of shipments.
          </span>
        </div>
      </div>
    </div>,


    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,


    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

 
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sports"
        description="Active recreation, gym, football and basketball. Sports for relaxation and maintenance of tone."
      />
      <ResumeHeading
        heading="Сooking"
        description="I make my family happy with delicious food"
      />
      <ResumeHeading
        heading="Technology"
        description="Since childhood I have been interested in computer, software and technical innovations"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ''}
    >
      <div className="resume-content">
        <ScreenHeading title={'Resume'} subHeading={'My formal Bio Details'} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
