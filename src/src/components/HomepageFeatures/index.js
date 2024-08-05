import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Beginner Friendly 🎉',
    Svg: require('@site/static/img/beginner.svg').default,
    description: (
      <>
        Start your Python journey with ease! Our course is specifically designed for beginners, requiring no prior programming knowledge. Each lesson is crafted to build your confidence and competence step-by-step.
      </>
    ),
  },
  {
    title: 'No Jargon 🚫',
    Svg: require('@site/static/img/jargon.svg').default,
    description: (
      <>
        Say goodbye to confusing tech speak! We explain every concept in simple, plain English, ensuring you understand the material without getting lost in complex terminology. Learn Python in a way that’s clear and straightforward.
      </>
    ),
  },
  {
    title: 'Impactful Learning 🌟',
    Svg: require('@site/static/img/impactful.svg').default,
    description: (
      <>
        Make your learning count! Our course focuses on practical, real-world applications of Python, so you can see the immediate impact of your new skills. From the first lesson to the final project, you’ll gain knowledge that’s both useful and applicable.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
