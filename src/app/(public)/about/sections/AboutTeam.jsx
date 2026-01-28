import React from 'react'

const AboutTeam = () => {
    const teamData = [
        { name: "Eunji Park", role: "Founder", email: "e.park@aetherfield.com" },
        { name: "Al Gorithm", role: "Senior Systems Architect", email: "a.gorithm@aetherfield.com" },
        { name: "Cassandra Query", role: "Head of Data Platforms", email: "c.query@aetherfield.com" },
        { name: "Sue Logic", role: "Principal Software Engineer", email: "s.logic@aetherfield.com" },
        { name: "Dash Bordman", role: "Product Manager", email: "d.bordman@aetherfield.com" },
        { name: "Greta Watt", role: "Director of Climate Strategy", email: "g.watt@aetherfield.com" },
        { name: "Gail Force", role: "Environmental Risk Analyst", email: "g.force@aetherfield.com" },
    ]
    return (
        <div className='bg-gray-100 flex flex-col justify-center py-[100px] px-[20px] gap-[40px]'>
            <h2 className='font-semibold text-[clamp(1.5rem,6vw,3.5rem)] leading-[clamp(1.75rem,7vw,4.375rem)]'>
                Meet the team
            </h2>
            <div className="w-full overflow-x-auto">
                <div className="w-full">
                    {/* DESKTOP TABLE */}
                    <table className="hidden md:table w-full table-fixed">
                        <thead>
                            <tr className="border-b">
                                <th className="w-1/3 px-3 py-2 text-left">Name</th>
                                <th className="w-1/3 px-3 py-2 text-left">Role</th>
                                <th className="w-1/3 px-3 py-2 text-right">Email</th>
                            </tr>
                        </thead>

                        <tbody>
                            {teamData.map((e, i) => (
                                <tr key={i} className="border-b border-gray-300">
                                    <td className="px-3 py-2">{e.name}</td>
                                    <td className="px-3 py-2">{e.role}</td>
                                    <td className="px-3 py-2 text-right break-all">{e.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* MOBILE STACKED ROWS */}
                    <div className="md:hidden space-y-4">
                        {teamData.map((e, i) => (
                            <div
                                key={i}
                                className="border border-gray-300 rounded-lg p-4 space-y-2"
                            >
                                <div>
                                    <p className="text-xs text-gray-500">Name</p>
                                    <p className="font-medium">{e.name}</p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">Role</p>
                                    <p className="font-medium">{e.role}</p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">Email</p>
                                    <p className="font-medium break-all">{e.email}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutTeam