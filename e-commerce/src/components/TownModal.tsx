import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import type { DataTown } from "../data/DataButton";

interface TownModalProps {
    isOpen: boolean
    closeModal: () => void
    town: DataTown | null
}


export default function TownModal({closeModal, isOpen, town} : TownModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/60"/>
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-6'>
                            <Dialog.Title as="h3" className='text-2xl font-bold text-gray-900 mb-4'>
                                {town?.name}
                            </Dialog.Title>

                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:online-none"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
  )
}
