import React, { useState, useEffect } from 'react'
import Frame from './frame'
import Header from './header'
import Body from './body'
import Info from './info'
import Marked from './marked'
import Navigation from './navigation'
import Day from './day'
import { WEEK_DAYS, MONTHS } from './const'
import {
  getStartWeekDayOfMonth,
  getMaxDays,
  isToday
} from '../../lib/calendar-utils'

interface Props {
  value: Date
  onChange: (date: Date) => void
}

const Calendar: FC<Props> = ({ value, onChange }) => {
  const today = new Date()
  const [date, setDate] = useState(value || today) // selected date
  const [viewingDate, setViewingDate] = useState(value || today) // current viewing month/date

  useEffect(() => {
    if (value) {
      setDate(value)
    }
  }, [value])

  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  const viewingYear = viewingDate.getFullYear()
  const viewingMonth = viewingDate.getMonth()
  const viewingStartDay = getStartWeekDayOfMonth(viewingDate)

  function changeDate(newDate: Date) {
    // change selected date
    setDate(newDate)
    onChange(newDate)
  }

  function getBeforeMonth() {
    // check if we need to show prev month's days before this month's first day
    const maxDays = getMaxDays(viewingYear, viewingMonth)
    return Array(viewingStartDay)
      .fill(null)
      .map((_, index) => {
        const currentDay = maxDays - viewingStartDay + index + 1
        return (
          <Day
            key={-index}
            isDisabled
            onClick={() => {
              changeDate(new Date(viewingYear, viewingMonth - 1, currentDay))
              setViewingDate(new Date(viewingYear, viewingMonth - 1, 1))
            }}
          >
            {currentDay}
          </Day>
        )
      })
  }

  function getRestMonth() {
    // check if we need to show next month's days after this month's last day
    const maxDays = getMaxDays(viewingYear, viewingMonth + 1)
    let weekday = viewingStartDay

    const currentMonth = Array(maxDays)
      .fill(null)
      .map((_, index) => {
        const currentDay = index + 1
        weekday = (weekday + 1) % 7
        return (
          <Day
            key={index}
            isSelected={
              viewingYear === year &&
              viewingMonth === month &&
              currentDay === day
            }
            onClick={() =>
              changeDate(new Date(viewingYear, viewingMonth, currentDay))
            }
          >
            {currentDay}
            {isToday(viewingYear, viewingMonth, currentDay) && (
              <Marked isSelected={currentDay === day} />
            )}
          </Day>
        )
      })

    if (weekday) {
      currentMonth.push(
        ...Array(6 - weekday + 1)
          .fill(null)
          .map((_, index) => {
            const currentDay = index + 1
            return (
              <Day
                key={index + 31}
                isDisabled
                onClick={() => {
                  changeDate(
                    new Date(viewingYear, viewingMonth + 1, currentDay)
                  )
                  setViewingDate(new Date(viewingYear, viewingMonth + 1, 1))
                }}
              >
                {currentDay}
              </Day>
            )
          })
      )
    }

    return currentMonth
  }

  return (
    <Frame>
      <Header>
        <Navigation
          onClick={() =>
            setViewingDate(new Date(viewingYear, viewingMonth - 1, day))
          }
          direct="left"
        />
        <Info>
          {MONTHS[viewingMonth]} {viewingYear}
        </Info>
        <Navigation
          onClick={() =>
            setViewingDate(new Date(viewingYear, viewingMonth + 1, day))
          }
          direct="right"
        />
      </Header>
      <Body>
        {WEEK_DAYS.map((weekDay, i) => (
          <Day key={i} isDisabled>
            {weekDay}
          </Day>
        ))}
        {getBeforeMonth()}
        {getRestMonth()}
      </Body>
    </Frame>
  )
}

export default Calendar
