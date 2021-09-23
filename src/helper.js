import dayjs from 'dayjs'


export const getDayKey = (dateOb,) => {
  return `edit-${dayjs(dateOb).format('YYYY-MM-DD')}`
}

export const getColorByBlocks = (blocks) => {

  if (!blocks) {
    return ''
  }

  let color = ''

  try {

    const length = JSON.stringify(blocks).length


    if (length > 800) {
      color = '#D57E7E'
    } else if (length > 700) {
      color = '#A2CDCD'
    } else if (length > 600) {
      color = '#FFE1AF'
    } else if (length > 500) {
      color = '#185ADB'
    } else if (length > 400) {
      color = '#FFC107'
    } else if (length > 200) {
      color = '#125D98'
    } else if (length > 0) {
      color = '#FCECDD'
    }

    return color

  } catch (error) {
    console.log('error', error);
    return ''
  }
}

