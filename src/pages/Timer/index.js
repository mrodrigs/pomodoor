import React, { useState, useEffect } from 'react';
import { Button, Progress, Slider, Menu, Dropdown } from 'antd';
import {
  PlayCircleFilled,
  RollbackOutlined,
  StepForwardFilled,
} from '@ant-design/icons';
import { IoIosVolumeHigh, IoIosVolumeMute } from 'react-icons/io';
import Bell from '../../assets/audio/bell.mp3';

import { Container, Card, Row, IconWrapper, Title, Version, Content } from './styles';
import './styles.css';

export default function Timer () {
  const [initialTime, setInitialTime] = useState(1500);
  const [counter, setCounter] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [audio, setAudio] = useState(new Audio(Bell));
  const [focusing, setFocusing] = useState(true);

  const menu = (
    <Menu>
      <Menu.Item onClick={() => {setInitialTime(1500); setFocusing(true)}}>
        <span>
          Focus
        </span>
      </Menu.Item>
      <Menu.Item onClick={() => {setInitialTime(300); setFocusing(false)}}>
        <span>
          Break
        </span>
      </Menu.Item>
      <Menu.Item onClick={() => {setInitialTime(900); setFocusing(false)}}>
        <span>
          Long Break
        </span>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    if (counter === 0) {
      audio.play();
      setIsRunning(false);
    }

    setMinutes(Math.floor(counter / 60));
    setSeconds(counter % 60)
    if (isRunning) {
      const timer
        = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [audio, counter, isRunning]);

  useEffect(() => {
    setCounter(initialTime);
  }, [initialTime]);

  function handleVolume (value) {
    const newAudio = audio;
    newAudio.volume = (value / 100);
    setAudio(newAudio);
  }

  function handleNext () {
    if (focusing) {
      setInitialTime(300);
      setFocusing(false);
      setIsRunning(false);
    } else {
      setInitialTime(1500);
      setFocusing(true);
      setIsRunning(false);
    }
  }

  return (
    <Container>
      <Content>
        <Title>
          {focusing ? 'Focusing' : 'Break time'}
        </Title>
        <Card>
          <Progress
            className="white-text"
            type="circle"
            percent={(100 * counter) / initialTime}
            format={() => `
            ${minutes > 9 ? minutes : '0' + minutes}
            :
            ${seconds > 9 ? seconds : '0' + seconds}
            `}
            strokeColor={{
              '0%': '#311b92',
              '100%': '#f44336',
            }}
          />
          <Row>
            <Dropdown overlay={menu} placement="bottomLeft" trigger="click">
              <Button 
                type="primary"
                shape="circle"
                size="large"
                style={{ backgroundColor: '#b71c1c', border: 0 }}
                icon={<RollbackOutlined />}
              />
            </Dropdown>
            <Button 
              type="primary"
              shape="circle"
              size="large"
              style={{ backgroundColor: '#b71c1c', border: 0 }}
              icon={<PlayCircleFilled />}
              onClick={() => counter > 0 ? setIsRunning(!isRunning) : null}
            />
            <Button 
              type="primary"
              shape="circle"
              size="large"
              style={{ backgroundColor: '#b71c1c', border: 0 }}
              icon={<StepForwardFilled />}
              onClick={() => handleNext()}
            />
          </Row>
          <IconWrapper>
            <IoIosVolumeMute style={{ color: '#b71c1c' }} size={30} />
            <Slider
              min={0}
              max={100}
              onChange={e => handleVolume(e)}
              defaultValue={100}
              style={{ width: '100%' }}
            />
            <IoIosVolumeHigh style={{ color: '#b71c1c' }} size={30} />
          </IconWrapper>
        </Card>
      </Content>
      <Version>
        0.1.0
      </Version>
    </Container>
  );
}
