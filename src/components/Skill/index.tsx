import React, { memo } from 'react';
import { H3 } from 'src/styles/components';
import { SkillBar, SkillContent } from './style';

interface Props {
  title: string;
  percent: string;
}

function Skill({ title, percent }: Props) {
  return (
    <SkillContent>
      <H3>{title}</H3>
      <SkillBar title={percent} />
    </SkillContent>
  );
}

export default memo(Skill);
