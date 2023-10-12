import { useState, useEffect } from 'react'
import { DownloadStatus } from '../types/types'


export const getStatus = (statuses: {[key: string]: DownloadStatus}) => {
  const generalStatus: DownloadStatus = {isError: false, isLoading: false}
  Object.values(statuses).forEach((item) => {
    if (item.isError) {
      generalStatus.isError = true;
    }
    if (item.isLoading) {
      generalStatus.isLoading = true;
    }
  })
  return generalStatus;
}


export const useGeneralStatus = (statuses: {[key: string]: DownloadStatus}) => {
  const [status, setStatus] = useState<DownloadStatus>({isError: false, isLoading: false})

  useEffect(() => {
    setStatus(getStatus(statuses))
  }, [statuses, setStatus])

  return status;
}
