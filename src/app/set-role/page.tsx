import Link from 'next/link'

export default async function SetRole() {

  // await clerkClient.users.updateUserMetadata(user?.id, {
  //   publicMetadata: {
  //     role : "company"
  //   }
  // })

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-1 gap-y-5">
        <h1 className='text-white text-4xl font-bold'>I am</h1>
        <div className="flex flex-row gap-2">
    <button className="dashboard-button">Company</button>
    <button className="dashboard-button">Employee</button>
  </div>
    </div>
  );
}