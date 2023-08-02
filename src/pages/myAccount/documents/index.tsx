import { Tabs } from 'flowbite-react'
import React from 'react'
import TranscriptDocs from './transcriptDocs'
import OtherDocs from './otherDocs'

const Documents
    = () => {
        return (
            <div>

                <Tabs.Group
                    aria-label="Full width tabs"

                >
                    <Tabs.Item
                        active
                        title="Transcript Documents"

                    >
                        <TranscriptDocs />
                    </Tabs.Item>
                    <Tabs.Item

                        title="other Documnets"
                    >
                        <OtherDocs />
                    </Tabs.Item>




                </Tabs.Group>

            </div>
        )
    }

export default Documents
