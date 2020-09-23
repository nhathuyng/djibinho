import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const useAnimInView = () => {
  const animation = useAnimation();
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  }, [animation, inView]);

  return { animation, ref };
};

export default useAnimInView;
